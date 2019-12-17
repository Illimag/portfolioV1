# Ubot Studio

Input and Output Json files with Python
This is a quick demo on how to:

Input a .json

Output a .json

Simple dict

Python

To run make sure to have Python2.7

This is output the json object

    python output.py

Now the json object will be in the file:

    data.json

This is how to input the json file and parse the dict:

    python input.py

# Source Code

## data.json

    {
        "0": [{"title": "this is a test title"}, {"url": "test.com"}], 
        "1": [{"title1": "this is a test title1"}, {"url1": "test.com1"}], 
        "2": [{"title2": "this is a test title2"}, {"url2": "test.com2"}], 
        "3": [{"title3": "this is a test title3"}, {"url3": "test.com3"}]
    }

## Input.py

    import json

    with open('data.json') as json_file:  
        data = json.load(json_file)
        print data

        lead = (data["0"])
        print lead

        title = lead[0]
        print title

        test_title = title["title"]
        print test_title

## Output.py

    import json

    data = { 
    }

    data[0] = []
    data[1] = []
    data[2] = []
    data[3] = []

    test_title = "this is a test title"
    test_url = "test.com"
    data[0].append({'title':test_title})
    data[0].append({'url':test_url})

    test_title1 = "this is a test title1"
    test_url1 = "test.com1"
    data[1].append({'title1':test_title1})
    data[1].append({'url1':test_url1})

    test_title2 = "this is a test title2"
    test_url2 = "test.com2"
    data[2].append({'title2':test_title2})
    data[2].append({'url2':test_url2})

    test_title3 = "this is a test title3"
    test_url3 = "test.com3"
    data[3].append({'title3':test_title3})
    data[3].append({'url3':test_url3})
    print data

    with open('data.json', 'w') as outfile:  
        json.dump(data, outfile)

[Back](https://jaemnkm.github.io/docs_redirect)